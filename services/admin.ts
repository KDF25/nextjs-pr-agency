import qs from "qs";
import { $authHost, $host } from "./index";

export const Auth = async (username: string, password: string) => {
  try {
    const { data } = await $host.post(
      "/vencon/admin/reg/oauth",
      qs.stringify({
        username: username,
        password: password,
      })
    );
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("isAuth", "true");
    return data;
  } catch (error) {
    // Обработка ошибок
    alert("Неверные данные!");
    throw error;
  }
};

export const putPageSeo = async (pageId: number, lng:string, title:string, description:string, keywords:string) => {
  try {
    const { data } = await $authHost.put(`/vencon/admin/edit/seo`, {
      page_id: pageId,
      seo: [
        {
          language: lng,
          title: title,
          description: description,
          keywords: keywords,
        },
      ],
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const putContentText = async (id: number, text: string) => {
  try {
    const { data } = await $authHost.put("/vencon/admin/edit/text", {
      text_id: id,
      text: text,
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const putContentFile = async (id: number, formData: FormData) => {
  try {
    const { data } = await $authHost.put(
      `/vencon/admin/edit/file?file_id=${id}`,
      formData
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const putContentAlt = async (fileId: number, text: string, lng: string) => {
  try {
    const { data } = await $authHost.put("/vencon/admin/edit/alt", {
      file_id: fileId,
      alt: [
        {
          text: text,
          language: lng,
        },
      ],
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addBlock = async (sectionId: number, textRu?: string, textUz?: string, textEn?: string) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/create/block", {
      section_id: sectionId,
      name: "admin's block",
      text: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addFile = async (blockId: number, formData: FormData) => {
  try {
    const { data } = await $authHost.post(
      `/vencon/admin/add/file?block_id=${blockId}`,
      formData
    );
    formData.delete("file");
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addAlt = async (fileId: number, textRu: string, textUz: string, textEn: string) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/add/alt", {
      file_id: fileId,
      alt: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const addText = async (blockId: number, textRu: string, textUz: string, textEn: string) => {
  try {
    const { data } = await $authHost.post("/vencon/admin/add/text", {
      block_id: blockId,
      text: [
        {
          text: textRu,
          language: "ru",
        },
        {
          text: textUz,
          language: "uz",
        },
        {
          text: textEn,
          language: "en",
        },
      ],
    });
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}`);
  }
};

export const deleteBlock = async (blockId: number) => {
  try {
    const { data } = await $authHost.delete(
      `/vencon/admin/remove/block?block_id=${blockId}`
    );
    return data;
  } catch (error) {
    alert(`Ошибка... ${error}. НЕВОЗМОЖНО УДАЛИТЬ ПОСЛЕДНИЙ ОСТАВШИЙСЯ БЛОК.`);
  }
};

export const getRevalidate = async (path: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/revalidate?path=${path}`
      // `http://localhost:3000/api/revalidate?path=${path}`
    );
    return response;
  } catch (error) {
    console.log(error)
  }
};