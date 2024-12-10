import { ConfigurationSchema } from '@jbrowse/core/configuration'

/**
 * #config AlphaFoldConfidenceAdapter
 */
function x() {} // eslint-disable-line @typescript-eslint/no-unused-vars

const AlphaFoldConfidenceAdapter = ConfigurationSchema(
  'AlphaFoldConfidenceAdapter',
  {
    /**
     * #slot
     */
    location: {
      type: 'fileLocation',
      defaultValue: { uri: '/path/to/my.bed.gz', locationType: 'UriLocation' },
    },
  },
  { explicitlyTyped: true },
)
export default AlphaFoldConfidenceAdapter
