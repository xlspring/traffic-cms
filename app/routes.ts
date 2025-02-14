import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  layout("./routes/auth.tsx", [
    route("/auth/login", "./screens/auth/login.tsx"),
    route("/auth/register", "./screens/auth/register.tsx"),
  ]),
  layout("./routes/dashboard.tsx", [
    route("/dashboard", "./screens/dashboard/index.tsx"),
    route("/list", "./screens/dashboard/list.tsx"),
  ]),
] satisfies RouteConfig;
