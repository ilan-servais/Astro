/**
 * Détermine si un projet a une vidéo associée basée sur son slug
 * @param slug - Le slug du projet à vérifier
 * @returns Boolean indiquant si le projet a une vidéo
 */
export const hasProjectVideo = (slug: string): boolean => 
  ['project-1', 'project-2', 'project-3'].includes(slug);
