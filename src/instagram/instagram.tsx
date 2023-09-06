import { jsx } from "@emotion/react";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export interface FetchInstagramContentsResponse {
  map(arg0: (element: any) => import("react/jsx-runtime").JSX.Element): unknown;
  data: InstagramContent[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

export interface InstagramContent {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  username: string;
  thumbnail_url: string;
}

// const INSTAGRAM_USER_ID: number = process.env.REACT_APP_INSTAGRAM_USER_ID;
// console.log(import.meta.env.VITE_INSTAGRAM_USER_ID);
// console.log(import.meta.env.VITE_INSTAGRAM_LONGTERM_ACCESSTOKEN);
export const Instagram = () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  const GetInstagramContents = async () => {
    // const [url, setUrl] = useState<string>("");

    const response: AxiosResponse<{ data: FetchInstagramContentsResponse }> =
      await axios.get(
        `https://graph.instagram.com/6026696687434320/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=IGQWROc2hiaV93VEIzRlFDak5iVDlYLWozMFZAuUFlpRGNhNlE3YkJxbGs5Wm82SXhlNUNkeno5T2t4YlAzTFllMzhvTGdWSTVOaG9sYXJ2T0ZAWNnB5T1FrdDgxZAk9GV2NvdTVUenU4bXpmUQZDZD`
      );
    const data = response.data.data;
    console.log("data", data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const dataId: any = data.map(
      (element: InstagramContent) => (
        console.log("element", element),
        (
          <li key={element.id}>
            <p>{element.caption}</p>
            <img src={element.media_url} alt="instagram" />
          </li>
        )
      )
    );
    return (
      <div>
        <ul>{dataId}</ul>
      </div>
    );
    // data.foreach((element) => console.log(element.id));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  };
  void GetInstagramContents();
};
