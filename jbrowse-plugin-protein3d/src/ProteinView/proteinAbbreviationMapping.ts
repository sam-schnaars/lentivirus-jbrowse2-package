export const proteinAbbreviationMapping = Object.fromEntries(
  [
    { name: 'alanine', abbreviation: 'Ala', singleLetterCode: 'A' },
    { name: 'arginine', abbreviation: 'Arg', singleLetterCode: 'R' },
    { name: 'asparagine', abbreviation: 'Asn', singleLetterCode: 'N' },
    { name: 'aspartic acid', abbreviation: 'Asp', singleLetterCode: 'D' },
    { name: 'cysteine', abbreviation: 'Cys', singleLetterCode: 'C' },
    { name: 'glutamic acid', abbreviation: 'Glu', singleLetterCode: 'E' },
    { name: 'glutamine', abbreviation: 'Gln', singleLetterCode: 'Q' },
    { name: 'glycine', abbreviation: 'Gly', singleLetterCode: 'G' },
    { name: 'histidine', abbreviation: 'His', singleLetterCode: 'H' },
    { name: 'isoleucine', abbreviation: 'Ile', singleLetterCode: 'I' },
    { name: 'leucine', abbreviation: 'Leu', singleLetterCode: 'L' },
    { name: 'lysine', abbreviation: 'Lys', singleLetterCode: 'K' },
    { name: 'methionine', abbreviation: 'Met', singleLetterCode: 'M' },
    { name: 'phenylalanine', abbreviation: 'Phe', singleLetterCode: 'F' },
    { name: 'proline', abbreviation: 'Pro', singleLetterCode: 'P' },
    { name: 'serine', abbreviation: 'Ser', singleLetterCode: 'S' },
    { name: 'threonine', abbreviation: 'Thr', singleLetterCode: 'T' },
    { name: 'tryptophan', abbreviation: 'Trp', singleLetterCode: 'W' },
    { name: 'tyrosine', abbreviation: 'Tyr', singleLetterCode: 'Y' },
    { name: 'valine', abbreviation: 'Val', singleLetterCode: 'V' },
  ].map(r => [r.abbreviation.toUpperCase(), r]),
)
