
// Calculate language percentages
const getPercentage = (list) => {
    // Sum of languages
    const sum = list.reduce((total, next) => total + next.count, 0);
    const percent = list.map((fav) => {
        return {
            language: fav.language,
            count: fav.count,
            percent: Math.round(((fav.count * 100) / sum) * 100) / 100,
        };
    });
    return percent;
};

export const findFavourite = (data) => {
    const favList = [];

    // Make a language list from data
    data.forEach((repo) => {
      // Find the repository's language in favList
      const found = favList.filter((result) => result.language === repo.language);
      // Increase count of exist language
      if (found.length > 0) {
        found[0].count++;
      } else {
        // Add new language if exists
        if (repo.language != null) {
          favList.push({ language: repo.language, count: 1, percent: 0 });
        }
      }
    });

    // Get calculated percentage array
    const result = getPercentage(favList);

    // Sort count descending
    result.sort((a, b) => b.count - a.count);

    return result;
  };

 