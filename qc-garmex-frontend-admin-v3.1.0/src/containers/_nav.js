export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
    badge: {
      color: "info",
      text: "2020",
    },
  },
  //Quản Lý Chung
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản Lý Chung",
    route: "/base",
    icon: {
      name: "cil-align-center",
      className: "text-info",
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Xí Nghiệp",
        to: "/base/breadcrumbs",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Tổ May",
        to: "/base/cards",
        icon: "cil-plus",
      },
    ],
  },
  //Quản Lý Lỗi
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản Lý Lỗi",
    route: "/base",
    icon: {
      name: "cil-text-strike",
      className: "text-warning",
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Nhóm Lỗi",
        to: "/base/breadcrumbs",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Lỗi",
        to: "/base/cards",
        icon: "cil-plus",
      },
    ],
  },
  //Quản Lý Nhân Viên
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản Lý Nhân Viên",
    route: "/base",
    icon: {
      name: "cil-people",
      className: "text-danger",
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Nhân Viên",
        to: "/base/breadcrumbs",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhân Viên Kiểm Final",
        to: "/base/cards",
        icon: "cil-plus",
      },
    ],
  },
  //Quản Lý May Mặc
  {
    _tag: "CSidebarNavDropdown",
    name: "Quản Lý May Mặc",
    route: "/base",
    icon: "cil-calculator",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Chủng Loại Sản Phẩm",
        to: "/base/breadcrumbs",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Đơn Hàng",
        to: "/base/cards",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý May Mặc",
        to: "/base/cards",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Quản Lý Kiểm Duyệt Tổ",
        to: "/base/cards",
        icon: "cil-plus",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Năng Suất Và Chất Lượng",
        to: "/base/cards",
        icon: "cil-plus",
      },
    ],
  },
  //Báo Cáo
  {
    _tag: "CSidebarNavDropdown",
    name: "Báo Cáo",
    route: "/base",
    icon: {
      name: "cil-chart-pie",
      className: "text-info",
    },
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Thành Phẩm",
        to: "/base/breadcrumbs",
        icon: "cil-plus",
      },
    ],
  },
  //QUẢN LÝ CẤU HÌNH
  {
    _tag: "CSidebarNavTitle",
    _children: ["QUẢN LÝ CẤU HÌNH"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Loại cấu hình",
    to: "/configtype",
    route: "/pages",
    icon: "cil-list",    
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cấu hình chung",
    to: "/globalsconfig",
    // route: "/pages",
    icon: {
      name: "cil-settings",
      className: "text-info",
    },    
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách API",
    to: "/config",
    route: "/pages",
    icon: {
      name: "cil-list-rich",
      className: "text-warning",
    }, 
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách tính năng",
    to: "/config",
    route: "/pages",
    icon: {
      name: "cil-list-numbered",
      className: "text-danger",
    }, 
  },
  //QUẢN LÝ BẢO MẬT  
  {
    _tag: "CSidebarNavTitle",
    _children: ["QUẢN LÝ BẢO MẬT"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách quyền",
    to: "/roles",    
    icon: "cil-list",    
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cấp quyền theo API",
    to: "/grant-permission",
    icon: {
      name: "cil-tags",
      className: "text-info",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách người dùng",
    to: "/users",    
    icon: {
      name: "cil-user",
      className: "text-warning",
    },   
  },
  //QUẢN LÝ MEDIA
  {
    _tag: "CSidebarNavTitle",
    _children: ["QUẢN LÝ MEDIA"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách hình ảnh",
    to: "/image",    
    icon: {
      name: "cil-album",
      className: "text-danger",
    },    
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách video",
    to: "/video",    
    icon: {
      name: "cil-video",
      className: "text-info",
    },  
  },
  {
    _tag: "CSidebarNavItem",
    name: "Danh sách tập tin",
    to: "/files",
    icon: {
      name: "cil-file",
      className: "text-warning",
    },
  },
  //Divider
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  }, 
];
