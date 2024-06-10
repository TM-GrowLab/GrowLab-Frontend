import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Error } from '../../types/Error';

interface PatchResponse {
  success: boolean;
  message: string;
}

const addConnection = async ({ UUID, connectionUUID }: { UUID: string; connectionUUID: string }): Promise<PatchResponse> => {
  const url = process.env.REACT_APP_URL;
  const response = await axios.patch<PatchResponse>(`${url}/user/${UUID}/${connectionUUID}`);
  return response.data;
};

export const useAddConnection = () => {
  const { mutate, data, status, error } = useMutation<PatchResponse, Error, { UUID: string; connectionUUID: string }>({
    mutationFn: addConnection,
  });

  return {
    addConnection: mutate,
    patchData: data,
    patchStatus: status,
    patchError: error,
  };
};
