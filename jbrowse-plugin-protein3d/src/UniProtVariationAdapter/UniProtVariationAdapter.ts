import {
  BaseFeatureDataAdapter,
  BaseOptions,
} from '@jbrowse/core/data_adapters/BaseAdapter'
import { openLocation } from '@jbrowse/core/util/io'
import { ObservableCreate } from '@jbrowse/core/util/rxjs'
import {
  Region,
  Feature,
  doesIntersect2,
  SimpleFeature,
} from '@jbrowse/core/util'

interface UniProtVariantFeature {
  begin: string
  end: string
  wildType: string
  mutatedType: string
  xrefs: {
    name: string
    id: string
    url: string
    alternativeUrl: string
  }[]
  predictions?: {
    score: number
  }[]
  descriptions?: {
    value: string
  }[]
  populationFrequencies?: {
    frequency?: number
  }[]
}

export default class UniProtVariationAdapter extends BaseFeatureDataAdapter {
  public static capabilities = ['getFeatures', 'getRefNames']

  public feats:
    | Promise<{ uniqueId: string; start: number; end: number }[]>
    | undefined

  private async loadDataP() {
    const { features } = JSON.parse(
      await openLocation(this.getConf('location')).readFile('utf8'),
    ) as { features: UniProtVariantFeature[] }

    const scoreField = this.getConf('scoreField')

    return features.map(({ begin, end, ...rest }, idx) => ({
      ...rest,
      uniqueId: `feat-${idx}`,
      start: +begin,
      end: +end + 1,
      score:
        scoreField === 'population_frequency'
          ? rest.populationFrequencies?.[0]?.frequency
          : scoreField === 'variant_impact_score'
            ? rest.predictions?.[0]?.score
            : undefined,
      description: rest.descriptions?.map(d => d.value).join(','),
      name: [
        rest.mutatedType
          ? `${rest.wildType}->${rest.mutatedType}`
          : `${rest.wildType}->del`,
      ],
    }))
  }

  private async loadData(_opts: BaseOptions = {}) {
    if (!this.feats) {
      this.feats = this.loadDataP().catch((e: unknown) => {
        this.feats = undefined
        throw e
      })
    }

    return this.feats
  }

  public async getRefNames(_opts: BaseOptions = {}) {
    return []
  }

  public getFeatures(query: Region, opts: BaseOptions = {}) {
    return ObservableCreate<Feature>(async observer => {
      const { start, end, refName } = query
      const data = await this.loadData()
      for (const f of data) {
        if (doesIntersect2(f.start, f.end, start, end)) {
          observer.next(new SimpleFeature({ ...f, refName }))
        }
      }
      observer.complete()
    }, opts.signal)
  }

  public freeResources(): void {}
}
