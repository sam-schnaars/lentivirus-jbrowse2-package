import PluginManager from '@jbrowse/core/PluginManager'
import DisplayType from '@jbrowse/core/pluggableElementTypes/DisplayType'
import { PluggableElementType } from '@jbrowse/core/pluggableElementTypes'
import { IAnyModelType } from 'mobx-state-tree'
import { getSession, getContainingTrack, Feature } from '@jbrowse/core/util'

// icons
import AddIcon from '@mui/icons-material/Add'

// locals
import LaunchProteinViewDialog from './components/LaunchProteinViewDialog'
import { MenuItem } from '@jbrowse/core/ui'

function isDisplay(elt: { name: string }): elt is DisplayType {
  return elt.name === 'LinearBasicDisplay'
}

function extendStateModel(stateModel: IAnyModelType) {
  return stateModel.views(
    (self: {
      contextMenuItems: () => MenuItem[]
      contextMenuFeature?: Feature
    }) => {
      const superContextMenuItems = self.contextMenuItems
      return {
        contextMenuItems() {
          const feature = self.contextMenuFeature
          const track = getContainingTrack(self)
          return [
            ...superContextMenuItems(),
            ...(feature
              ? [
                  {
                    label: 'Launch protein view',
                    icon: AddIcon,
                    onClick: () => {
                      getSession(track).queueDialog(handleClose => [
                        LaunchProteinViewDialog,
                        {
                          model: track,
                          handleClose,
                          feature,
                        },
                      ])
                    },
                  },
                ]
              : []),
          ]
        },
      }
    },
  )
}

export default function LaunchProteinViewF(pluginManager: PluginManager) {
  pluginManager.addToExtensionPoint(
    'Core-extendPluggableElement',
    (elt: PluggableElementType) => {
      if (isDisplay(elt)) {
        elt.stateModel = extendStateModel(elt.stateModel)
      }
      return elt
    },
  )
}