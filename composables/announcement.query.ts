import {useMutation, useQuery, useQueryClient} from "@tanstack/vue-query";
import {addAnnouncement, allAnnouncement, getAnnouncementById} from "../services/announcement.service";

export const useAllAnnouncement = (page: number, pageSize: number) => {
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['announcements'],
        queryFn: () => allAnnouncement(page, pageSize),
    });

    return {
        data,
        isAllAnnouncementLoading: isLoading,
        isAllAnnouncementError: isError,
        allAnnouncementError: error,
        allAnnouncementRefetch: refetch,
    }
}

export const useAnnouncementById = (id: number) => {
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['announcement', id],
        queryFn: () => getAnnouncementById(id),
    });

    return {
        data,
        isAnnouncementByIdLoading: isLoading,
        isAnnouncementByIdError: isError,
        announcementByIdError: error,
        announcementByIdRefetch: refetch,
    }
}

export const useAddAnnouncement = () => {
    const queryClient = useQueryClient();

    const {mutate, isError, error, isSuccess} = useMutation({
        mutationFn: addAnnouncement,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['announcements']});
        },
    });

    return {
        AddAnnouncement: mutate,
        isAddAnnouncementError: isError,
        AddAnnouncementError: error,
        useAddAnnouncementSuccess : isSuccess,
    };
}