export interface IMenusVo {
  /**ID */
  id: number;
  /** 标题 */
  name: string;
  /**父节点ID */
  parentId: number;
  /**路径 */
  url: string;
  /**排序 */
  sort: number;
  /**小图标 */
  icon?: string | null;
}
