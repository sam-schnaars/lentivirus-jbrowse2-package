import { Feature } from '@jbrowse/core/util'
import { Structure } from 'molstar/lib/mol-model/structure'
import { Script } from 'molstar/lib/mol-script/script'
import { proteinAbbreviationMapping } from './proteinAbbreviationMapping'

export function checkHovered(hovered: unknown): hovered is {
  hoverFeature: Feature
  hoverPosition: {
    coord: number
    refName: string
  }
} {
  return (
    !!hovered &&
    typeof hovered == 'object' &&
    'hoverFeature' in hovered &&
    'hoverPosition' in hovered
  )
}

export function getMolstarStructureSelection({
  structure,
  selectedResidue,
}: {
  structure: Structure
  selectedResidue: number
}) {
  return Script.getStructureSelection(
    Q =>
      Q.struct.generator.atomGroups({
        'residue-test': Q.core.rel.eq([
          Q.struct.atomProperty.macromolecular.label_seq_id(),
          selectedResidue,
        ]),
        'group-by': Q.struct.atomProperty.macromolecular.residueKey(),
      }),
    structure,
  )
}

export function toStr({
  chain,
  code,
  structureSeqPos,
}: {
  structureSeqPos?: number
  code?: string
  chain?: string
}) {
  return [
    structureSeqPos === undefined ? '' : `Position: ${structureSeqPos}`,
    code
      ? `Letter: ${code} (${proteinAbbreviationMapping[code]?.singleLetterCode})`
      : '',
    chain ? `Chain: ${chain}` : '',
  ]
    .filter(f => !!f)
    .join(', ')
}

export function invertMap(arg: Record<number, number>): Record<number, number> {
  return Object.fromEntries(
    Object.entries(arg)
      .map(([a, b]) => [b, +a])
      .filter(f => f[0] !== undefined),
  )
}
