export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/habits") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              {
                id: 1,
                image: "https://image.freepik.com/free-vector/man-meditating-concept_23-2148508453.jpg",
                task: "Meditate",
                repeat: "Daily",
                goal: "1 time daily",
                time: "In Morning",
                start: "Today",
              },
              {
                id: 1,
                image: "https://th.bing.com/th/id/OIP.XMcyOdsiEPE7SM-Fy_2QgwAAAA?pid=ImgDet&rs=1",
                task: "Running",
                repeat: "once in week",
                goal: "1 time daily",
                time: "In Morning",
                start: "Today",
              },
              {
                id: 1,
                image: "https://th.bing.com/th/id/OIP.XD2qskt4nOHD1Csufqy_bQHaHv?pid=ImgDet&rs=1",
                task: "Reading",
                repeat: "Daily",
                goal: "2 times daily",
                time: "In Morning",
                start: "Today",
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "No Habit Found."
          });
        }
      }, 2000);
    });
  };
  