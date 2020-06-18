
import forge from 'node-forge';

const createModelId = ({ api, name }) => {
  const digestableString = `${api}.${name}`;
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default createModelId;
