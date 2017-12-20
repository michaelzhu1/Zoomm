import React from "react";
import { Link } from "react-router-dom";

export const DiscoverPeopleItems = ({photo}) => (
  <li>
    <div className="discover-people-name">
      <Link  to={`/user/${photo.author_id}`}>{photo.owner}</Link>
    </div>
    <div>
      <Link to={`/user/${photo.author_id}`}>
      <img src={photo.owner_avatar} className="feature-user-avatar" />
      </Link>
    </div>
  </li>
);
