export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(navigator.language, { hour: '2-digit', minute:'2-digit'});
}