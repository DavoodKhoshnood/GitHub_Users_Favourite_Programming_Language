import React, { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

const More = () => {
  const { userObj } = useContext(SearchContext);

  const uniqIt = (data, key) => {
    return [...new Map(data.map((x) => [key(x), x])).values()];
  };

  const newData = uniqIt(userObj, (it) => it.name);
  return (
    <table>
      <thead>
        <th>
          <h3>Repository name</h3>
        </th>
        <th>
          <h3>Languages</h3>
        </th>
        <th>
          <h3>Values</h3>
        </th>
      </thead>
      <tbody>
        {newData.map((obj) => {
          //const sum = obj.laguages.reduce((total, next) => total + next[1], 0);
          //console.log(sum);
          return (
            <tr key={obj.id}>
              <td>
                <a href={obj.html_url} target="blank">
                  {obj.name}
                </a>
              </td>
              <td>
                {Object.entries(obj.languages).map((lang) => (
                  <p key={lang}>{lang[0]}</p>
                ))}
              </td>
              <td>
                {Object.entries(obj.languages).map((lang) => (
                  <p key={`${lang[0]} : ${lang[1]}`}>{lang[1]} kb</p>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default More;
