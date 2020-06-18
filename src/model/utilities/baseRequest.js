
const baseRequest = ({ method, params }) => [
  'request',
  { method, params },
];

export default baseRequest;
