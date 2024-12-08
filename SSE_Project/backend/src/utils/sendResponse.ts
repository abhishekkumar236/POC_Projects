import { Response } from "express";

const sendResponse = (
  res: Response<any, Record<string, any>>,
  {
    status,
    message,
    success,
    data = null,
  }: { status: number; message: string; success: boolean; data: null | object }
) => {
  res.status(status).json({
    success,
    message,
    data,
  });
};

export default sendResponse;
