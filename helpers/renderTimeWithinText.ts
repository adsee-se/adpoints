export const renderTimeWithinText = (
  updatedAt?: Date | string,
  createdAt?: Date | string
) => {
  const returnTimeSecond =
    new Date(updatedAt ? updatedAt : createdAt ? createdAt : "").getTime() /
    1000;
  const nowTimeSecond = Date.now() / 1000;
  const timeDiff = nowTimeSecond - returnTimeSecond;
  const timeWithinText =
    timeDiff < 60
      ? "1分以内"
      : timeDiff < 60 * 5
      ? "5分以内"
      : timeDiff < 60 * 15
      ? "15分以内"
      : timeDiff < 60 * 30
      ? "30分以内"
      : timeDiff < 60 * 60
      ? "１時間以内"
      : timeDiff < 60 * 60 * 3
      ? "３時間以内"
      : timeDiff < 60 * 60 * 5
      ? "５時間以内"
      : timeDiff < 60 * 60 * 10
      ? "10時間以内"
      : timeDiff < 60 * 60 * 20
      ? "20時間以内"
      : timeDiff > 60 * 60 * 24
      ? "1日以上前"
      : "";
  return timeWithinText;
};
