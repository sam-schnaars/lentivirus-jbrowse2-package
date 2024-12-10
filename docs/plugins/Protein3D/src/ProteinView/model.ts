import { autorun } from 'mobx'
import { BaseViewModel } from '@jbrowse/core/pluggableElementTypes'
import { ElementId } from '@jbrowse/core/util/types/mst'
import { Instance, addDisposer, types } from 'mobx-state-tree'

// locals
import { PluginContext } from 'molstar/lib/mol-plugin/context'
import { addStructureFromData } from './addStructureFromData'
import { addStructureFromURL } from './addStructureFromURL'
import Structure from './structureModel'
import highlightResidue from './highlightResidue'

/**
 * #stateModel Protein3dViewPlugin
 * extends
 * - BaseViewModel
 */
function stateModelFactory() {
  return types
    .compose(
      'ProteinView',
      BaseViewModel,
      types.model({
        /**
         * #property
         */
        id: ElementId,
        /**
         * #property
         */
        type: types.literal('ProteinView'),
        /**
         * #property
         */
        structures: types.array(Structure),

        /**
         * #property
         */
        showControls: false,
        /**
         * #property
         */
        height: types.optional(types.number, 650),

        /**
         * #property
         */
        showHighlight: false,
        /**
         * #property
         */
        zoomToBaseLevel: true,
        /**
         * #property
         */
        showAlignment: false,
      }),
    )
    .volatile(() => ({
      /**
       * #volatile
       */
      progress: '',
      /**
       * #volatile
       */
      error: undefined as unknown,
      /**
       * #volatile
       */
      molstarPluginContext: undefined as PluginContext | undefined,
    }))

    .actions(self => ({
      /**
       * #action
       */
      setHeight(n: number) {
        self.height = n
        return n
      },
      /**
       * #action
       */
      setShowAlignment(f: boolean) {
        self.showAlignment = f
      },

      /**
       * #action
       */
      setShowControls(arg: boolean) {
        self.showControls = arg
      },

      /**
       * #action
       */
      setError(e: unknown) {
        self.error = e
      },

      /**
       * #action
       */
      setShowHighlight(arg: boolean) {
        self.showHighlight = arg
      },
      /**
       * #action
       */
      setZoomToBaseLevel(arg: boolean) {
        self.zoomToBaseLevel = arg
      },
      /**
       * #action
       */
      setMolstarPluginContext(p?: PluginContext) {
        self.molstarPluginContext = p
      },
    }))
    .actions(self => ({
      afterAttach() {
        addDisposer(
          self,
          autorun(async () => {
            const { structures, molstarPluginContext } = self
            if (molstarPluginContext) {
              for (const structure of structures) {
                try {
                  const { model } = structure.data
                    ? await addStructureFromData({
                        data: structure.data,
                        plugin: molstarPluginContext,
                      })
                    : structure.url
                      ? await addStructureFromURL({
                          url: structure.url,
                          plugin: molstarPluginContext,
                        })
                      : { model: undefined }

                  const sequences = model?.obj?.data.sequence.sequences.map(
                    s => {
                      let seq = ''
                      const arr = s.sequence.label.toArray()
                      // eslint-disable-next-line unicorn/no-for-loop,@typescript-eslint/prefer-for-of
                      for (let i = 0; i < arr.length; i++) {
                        seq += arr[i]!
                      }
                      return seq
                    },
                  )
                  structure.setSequences(sequences)
                } catch (e) {
                  self.setError(e)
                  console.error(e)
                }
              }
            }
          }),
        )

        addDisposer(
          self,
          autorun(() => {
            const { structures, molstarPluginContext } = self
            if (molstarPluginContext) {
              for (const [i, s0] of structures.entries()) {
                const structure =
                  molstarPluginContext.managers.structure.hierarchy.current
                    .structures[i]?.cell.obj?.data
                const pos = s0.structureSeqHoverPos
                if (structure && pos !== undefined) {
                  highlightResidue({
                    structure,
                    plugin: molstarPluginContext,
                    selectedResidue: pos,
                  })
                }
              }
            }
          }),
        )
      },
    }))
}

export default stateModelFactory

export type JBrowsePluginProteinViewStateModel = ReturnType<
  typeof stateModelFactory
>
export type JBrowsePluginProteinViewModel =
  Instance<JBrowsePluginProteinViewStateModel>

export type JBrowsePluginProteinStructureStateModel = typeof Structure
export type JBrowsePluginProteinStructureModel =
  Instance<JBrowsePluginProteinStructureStateModel>
