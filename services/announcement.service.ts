import type { Announcement, AnnouncementList } from "../models/announcement";

export const allAnnouncement = async (
  page: number,
  pageSize: number,
): Promise<{
  data: AnnouncementList;
  total: number;
  page: number;
}> => {
  const response = await useFetchCustom("/api/announcements");
  return {
    data: response.data as AnnouncementList,
    total: response.meta.total,
    page: response.meta.currentPage,
  };
};

export const getAnnouncementById = async (
  id: number,
): Promise<Announcement> => {
  const response = await useFetchCustom(`/api/announcements/${id}`);
  return response as Announcement;
};

export const addAnnouncement = async (
  announcement: Announcement,
): Promise<Announcement> => {
  console.log(announcement);
  const response = await useFetchCustom("/api/announcements", {
    method: "POST",
    body: JSON.stringify(announcement),
  });
  return response.data as Announcement;
};
