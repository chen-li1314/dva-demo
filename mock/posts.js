const Mock=require("mockjs");
module.exports = {
  "GET /api/posts": (req, res) => {
    res.status(200).json({
      users: Mock.mock({
        "list|10": [{ id: '@id', name: "@name", age: 10, gender: "@gender" }],
      }),
    });
  },
};
