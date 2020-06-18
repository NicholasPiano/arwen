
import forge from 'node-forge';

const createAPIId = url => forge.md.sha256.create().update(url).digest().toHex();

export default createAPIId;
