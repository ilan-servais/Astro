/**
 * Determine if a project has an associated video based on its slug
 * @param slug - The project slug to check
 * @returns Boolean indicating whether the project has a video
 */
export const hasProjectVideo = (slug: string): boolean => {
  return ['project-1', 'project-2', 'project-3'].includes(slug);
};
