export const postFollow = follow => {
  return $.ajax({
    method: "POST",
    url: `api/follows`,
    data: follow
  });
};

export const deleteFollow = follow => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${follow.user_id}`,
    data: follow
  });
};

// export const getFollows = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/follows",
//   });
// };
