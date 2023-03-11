import { useMutation } from '@tanstack/react-query';

import {
  patchSubTravelogue,
  patchTraveloguePublish,
  postSubTravelogue,
} from '@/api/post';
import { SubTravelogueType } from '@/types/post';

export const usePostSubTravelogue = () => {
  return useMutation({
    mutationFn: async (data: { data: SubTravelogueType; travelogueId: string }) =>
      await postSubTravelogue(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePatchSubTravelogue = () => {
  return useMutation({
    mutationFn: async (data: {
      data: SubTravelogueType;
      travelogueId: string;
      subTravelogueId: string;
    }) => await patchSubTravelogue(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePatchTraveloguePublish = () => {
  return useMutation({
    mutationFn: async (data: { travelogueId: number }) =>
      await patchTraveloguePublish(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
