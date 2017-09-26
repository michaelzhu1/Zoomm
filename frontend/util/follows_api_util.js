export const postFollow = followingId => {
  return $.ajax({
    method: "POST",
    url: `api/follows`,
    data: {
      follow: { following_id: followingId }
    }
  });
};

export const deleteFollow = followingId => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${followingId}`,
    data: {
      follow: { following_id: followingId }
    }
  });
};

export const getFollows = () => {
  return $.ajax({
    method: "GET",
    url: "/api/follows",
  });
};
