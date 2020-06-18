
import forge from 'node-forge';

import serializeSortedObject from './serializeSortedObject';

const createQueryId = ({ api, model, ...rest }) => {
  const serializedData = serializeSortedObject(rest);
  const digestableString = `${api}.${model}.${serializedData}`;
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default createQueryId;
