import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>OOoopss! There is no such route! Please go by this link</p>
      <Link to={'/'}>--To homepage--</Link>
    </div>
  );
}
