
import forge from 'node-forge';

export const methods = {
  GET: 'get',
  SET: 'set',
};

export const LOCAL_STORAGE_ID = forge.md.sha256.create().update('local-storage-id').digest().toHex();
