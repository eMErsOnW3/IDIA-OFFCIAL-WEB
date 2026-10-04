export default function SensitiveValue({ entity, protectedState, className = '' }) {
  return <mark className={`${protectedState ? 'token' : 'sensitive'} ${className}`}>
    {protectedState ? entity.token : entity.value}
  </mark>;
}
