import axios, { AxiosRequestConfig, Method } from 'axios';

interface AxiosUtilityProps {
  url: string;
  method: Method;
  data?: any;
  params?: any;
  fileUpload?: boolean;
  onNetworkError?: () => void;
}

const AxiosUtility = async ({
  url,
  method,
  data = null,
  params = null,
  fileUpload = false,
  onNetworkError = null,
}: AxiosUtilityProps): Promise<any> => {
  const headers = {
    'Content-Type': fileUpload ? 'multipart/form-data' : 'application/json',
  };

  try {
    let finalData = fileUpload ? data : null;
    if (!fileUpload && data) {
      finalData = data; // Send JSON data directly
    }

    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      data: finalData,
      params,
    };

    const response = await axios(config);

    return response.data;
  } catch (error: any) {
    console.error(error);

    if (error.message === 'Network Error' && onNetworkError) {
      onNetworkError();
    }

    throw error;
  }
};

export default AxiosUtility;
