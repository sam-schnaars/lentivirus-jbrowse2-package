import React from 'react'
import {
  Button,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
  TypographyProps,
} from '@mui/material'
import { Dialog } from '@jbrowse/core/ui'

function Typography2({ children }: TypographyProps) {
  return <Typography style={{ margin: 4 }}>{children}</Typography>
}
export default function HelpDialog({
  handleClose,
}: {
  handleClose: () => void
}) {
  return (
    <Dialog open maxWidth="lg" onClose={handleClose} title="Help">
      <DialogContent>
        <Typography2>
          The procedure for the protein lookup is as follows:
          <ul>
            <li>
              (Automatic lookup) Searches mygene.info for the transcript ID, in
              order to retrieve the UniProt ID associated with a given
              transcript ID and then, the UniProt ID is used to lookup the
              structure in AlphaFoldDB
            </li>
            <li>
              (Manual) Allows you to choose your own structure file from your
              local machine (e.g. a PDB file predicted by e.g. ColabFold) or
              supply a specific URL
            </li>
            <li>
              The residues from the structure are downloaded, and then you can
              choose the transcript isoform from the selected gene that best
              represents the structure. Asterisks are displayed if there is an
              exact sequence match
            </li>
            <li>
              The residues from the structure are finally aligned to the to the
              selected transcript&apos;s protein sequence representation, and
              this creates a mapping from the reference genome coordinates to
              positions in the 3-D structure
            </li>
            <li>
              Finally the molstar panel is opened, and this contains many
              specialized features features, plus additional mouseover and
              selection features supplied by the plugin to connect mouse click
              actions and mouse hover with coordinates on the linear genome view
            </li>
          </ul>
        </Typography2>
        <Typography2>
          If you run into challenges with this workflow e.g. your transcripts
          are not being found in mygene.info then you can use the Manual import
          form, or contact colin.diesh@gmail.com for troubleshooting
        </Typography2>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          onClick={() => {
            handleClose()
          }}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
