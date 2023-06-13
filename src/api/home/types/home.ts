export type HomeWebNavInfo = ApiResponseData<{
  pagination: {
    page: string
    pageSize: number
    total: number
  }
  results: any[]
}>
