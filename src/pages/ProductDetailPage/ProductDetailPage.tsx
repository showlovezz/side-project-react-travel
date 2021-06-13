import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchProps {
  match: {
    params: {
      touristRouteId: string
    }
  }
}

const ProductDetailPage: React.FC<MatchProps & RouteComponentProps> = ({
  match,
}: MatchProps) => {
  const {
    params: { touristRouteId },
  } = match

  return <h1>旅遊路線詳細頁面, 路線ID： {touristRouteId}</h1>
}

export default ProductDetailPage
