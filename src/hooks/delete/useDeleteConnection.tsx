import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Error } from '../../types/Error';

interface DeleteResponse {
  success: boolean;
  message: string;
}

const deleteConnection = async ({ UUID, connectionUUID }: { UUID: string; connectionUUID: string }): Promise<DeleteResponse> => {
  const url = process.env.REACT_APP_URL;
  const response = await axios.delete<DeleteResponse>(`${url}/user/${UUID}/${connectionUUID}`);
  return response.data;
};

export const useDeleteConnection = () => {
  const { mutate, data, status, error } = useMutation<DeleteResponse, Error, { UUID: string; connectionUUID: string }>({
    mutationFn: deleteConnection,
  });

  return {
    deleteConnection: mutate,
    deleteData: data,
    deleteStatus: status,
    deleteError: error,
  };
};
