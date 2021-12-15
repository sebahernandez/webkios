import { Dot, LoadingWrapper } from './loading.style';

export default function Loading() {
    return (
      <LoadingWrapper>
        <h3>Cargando</h3>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </LoadingWrapper>
    )
  }