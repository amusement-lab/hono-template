// inspiration source : https://github.com/SyahrulBhudiF/Hono-Starter-Code/blob/master/src/route/user-route.ts

import { createRoute } from "@hono/zod-openapi";
import { z, ZodType } from "zod";

class CreateRouteUtil {
  constructor(
    public tags: string[],
    public security?: Parameters<typeof createRoute>[0]['security'],
  ) { }

  createRouteUtil(option: {
    method: "post" | "get" | "put" | "patch" | "delete",
    path: string,
    responseSchema: ZodType,
    requestSchema?: ZodType,
    description?: string,
  }
  ) {
    return createRoute({
      method: option.method,
      path: option.path,
      description: option.description,
      tags: this.tags,
      security: this.security,
      ...(option.requestSchema ? {
        request: {
          body: {
            content: {
              "application/json": {
                schema: option.requestSchema,
              },
            },
          },
        },
      } : {}),
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: option.responseSchema,
            },
          },
        },
        // 400: {
        //   description: "Bad Request",
        //   content: {
        //     "application/json": {
        //       schema: z.object({
        //         status: z.string(),
        //         message: z.string(),
        //         data: z.null(),
        //       }),
        //       example: {
        //         status: "error",
        //         message: "Invalid request data",
        //         data: null,
        //       },
        //     },
        //   },
        // },
        // 401: {
        //   description: "Unauthorized",
        //   content: {
        //     "application/json": {
        //       schema: z.object({
        //         status: z.string(),
        //         message: z.string(),
        //         data: z.null(),
        //       }),
        //       example: {
        //         status: "error",
        //         message: "Unauthorized access",
        //         data: null,
        //       },
        //     },
        //   },
        // },
        // 403: {
        //   description: "Forbidden",
        //   content: {
        //     "application/json": {
        //       schema: z.object({
        //         status: z.string(),
        //         message: z.string(),
        //         data: z.null(),
        //       }),
        //       example: {
        //         status: "error",
        //         message: "Access forbidden",
        //         data: null,
        //       },
        //     },
        //   },
        // },
        // 404: {
        //   description: "Not Found",
        //   content: {
        //     "application/json": {
        //       schema: z.object({
        //         status: z.string(),
        //         message: z.string(),
        //         data: z.null(),
        //       }),
        //       example: {
        //         status: "error",
        //         message: "Resource not found",
        //         data: null,
        //       },
        //     },
        //   },
        // },
        // 500: {
        //   description: "Internal Server Error",
        //   content: {
        //     "application/json": {
        //       schema: z.object({
        //         status: z.string(),
        //         message: z.string(),
        //         data: z.null(),
        //       }),
        //       example: {
        //         status: "error",
        //         message: "Internal server error",
        //         data: null,
        //       },
        //     },
        //   },
        // },
      },
    });
  }
}

const createRouteUtil2 = (option: {
  method: "post" | "get" | "put" | "patch" | "delete",
  path: string,
  tags: string[],
  responseSchema: ZodType,
  requestSchema?: ZodType,
  security?: Parameters<typeof createRoute>[0]['security'],
  description?: string,
}
) => {
  return createRoute({
    method: option.method,
    path: option.path,
    description: option.description,
    tags: option.tags,
    security: option.security,
    ...(option.requestSchema ? {
      request: {
        body: {
          content: {
            "application/json": {
              schema: option.requestSchema,
            },
          },
        },
      },
    } : {}),
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: option.responseSchema,
          },
        },
      },
      400: {
        description: "Bad Request",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string(),
              message: z.string(),
              data: z.null(),
            }),
            example: {
              status: "error",
              message: "Invalid request data",
              data: null,
            },
          },
        },
      },
      401: {
        description: "Unauthorized",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string(),
              message: z.string(),
              data: z.null(),
            }),
            example: {
              status: "error",
              message: "Unauthorized access",
              data: null,
            },
          },
        },
      },
      403: {
        description: "Forbidden",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string(),
              message: z.string(),
              data: z.null(),
            }),
            example: {
              status: "error",
              message: "Access forbidden",
              data: null,
            },
          },
        },
      },
      404: {
        description: "Not Found",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string(),
              message: z.string(),
              data: z.null(),
            }),
            example: {
              status: "error",
              message: "Resource not found",
              data: null,
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string(),
              message: z.string(),
              data: z.null(),
            }),
            example: {
              status: "error",
              message: "Internal server error",
              data: null,
            },
          },
        },
      },
    },
  });
};

export { CreateRouteUtil, createRouteUtil2 };