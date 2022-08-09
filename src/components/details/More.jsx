import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "../../context/searchContext";

const More = () => {
  const { userName } = useContext(SearchContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getGithubData() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${userName}/repos`
        );
        response.data.map(async (obj) => {
          async function getLanguages() {
            await axios.get(obj.languages_url).then((res) => {
              const response = JSON.stringify(res.data)
                .slice(1, -1)
                .replaceAll('"', "");
              const resData = response.split(",");
              const newData = { title: obj.name, detail: resData };
              setData((oldData) => [...oldData, newData]);
            });
          }
          getLanguages();
        });
      } catch (error) {
        console.error(error);
      }
    }
    getGithubData();
  }, [userName]);

  const uniqIt = (data, key) => {
    return [...new Map(data.map((x) => [key(x), x])).values()];
  };

  const newData = uniqIt(data, (it) => it.title);

  return (
    <table>
      <thead>
        <th>
          <h3>Repository name</h3>
        </th>
        <th>
          <h3>Languages</h3>
        </th>
      </thead>
      <tbody>
        {newData.map((obj) => {
          return (
            <tr>
              <td>{obj.title}</td>
              <td>
                {obj.detail.map((lang) => (
                  <p>{lang}</p>
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
