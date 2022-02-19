import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <Fragment>
      <h1>
        404
        <br />
        <small>Not Found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </Fragment>
  );
}
