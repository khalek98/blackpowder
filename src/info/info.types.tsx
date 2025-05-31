export type MenuItemType = {
  menuName: string;
  anchor: string;
};

export interface HeaderInterface {
  menuList?: MenuItemType[];
  darkBG?: boolean;
}

export interface InfoInterface {
  name: string;
  fullname: string;
  address: string;
  url: string;
  descr: string;
  menuList: MenuItemType[];
}
