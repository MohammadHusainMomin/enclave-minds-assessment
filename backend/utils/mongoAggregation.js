const revenueByCategoryPipeline = [
  {
    $match: {
      quantity: { $gt: 5 }
    }
  },
  {
    $group: {
      _id: "$category",
      totalRevenue: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
];

export default revenueByCategoryPipeline;
