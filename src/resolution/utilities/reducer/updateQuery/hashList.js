
import forge from 'node-forge';

const hashList = data => {
  const digestableString = data.join('.');
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default hashList;
