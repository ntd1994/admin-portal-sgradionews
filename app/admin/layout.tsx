// import Sidebar from "../../components/Sidebar"; // Điều chỉnh đường dẫn nếu cần thiết
// import { ReactNode } from "react";

// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <div className="grid grid-cols-12 gap-4  bg-gray-200">
//       {/* Sidebar */}
//       <div className="col-span-2">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="col-span-9">{children}</div>
//     </div>
//   );
// }

import Sidebar from "../../components/Sidebar"; // Điều chỉnh đường dẫn nếu cần thiết
import { ReactNode } from "react";
import PrivateRoute from "../../components/PrivateRoute";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PrivateRoute>
      <div className="grid grid-cols-12 gap-4 bg-gray-200">
        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-9">{children}</div>
      </div>
    </PrivateRoute>
  );
}
