// components/NowPlaying.jsx - VERSIÓN CON ACTUALIZACIÓN INTELIGENTE MEJORADA
import { useState, useEffect, useRef } from 'react';
import { Music2, Pause, Play, AlertCircle, RefreshCw } from 'lucide-react';

export default function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const currentTrackId = useRef(null);

  // Tu información de Last.fm
  const LASTFM_API_KEY = '8fca3cb9479e44206dc14ef0aaa36140';
  const LASTFM_USER = 'eleBlue';

  const fetchNowPlaying = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;
      
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(`Last.fm API Error: ${data.message} (Code: ${data.error})`);
      }

      if (!data.recenttracks?.track) {
        throw new Error('Estructura de datos inesperada de Last.fm');
      }

      const tracks = data.recenttracks.track;
      
      if (tracks.length > 0) {
        const currentTrack = tracks[0];
        
        // Crear un ID único para la canción actual
        const trackId = `${currentTrack.name}-${currentTrack.artist?.['#text']}`;
        
        // Buscar la imagen de tamaño medium
        const image = currentTrack.image?.find(img => img.size === 'medium')?.['#text'] || 
                     currentTrack.image?.[2]?.['#text'] || 
                     currentTrack.image?.[1]?.['#text'] || 
                     currentTrack.image?.[0]?.['#text'] || '';
        
        const newTrack = {
          name: currentTrack.name || 'Sin título',
          artist: currentTrack.artist?.['#text'] || 'Artista desconocido',
          album: currentTrack.album?.['#text'] || '',
          image: image,
          nowPlaying: currentTrack['@attr']?.nowplaying === 'true',
          trackId: trackId // ID único para comparar
        };
        
        // Solo actualizar si realmente cambió la canción
        if (trackId !== currentTrackId.current) {
          setTrack(newTrack);
          currentTrackId.current = trackId;
        }
      }
      
    } catch (err) {
      console.error('Error fetching Now Playing:', err);
      setError(err.message);
      setTrack(null);
      currentTrackId.current = null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    
    // Configurar intervalos diferentes según el estado
    const interval = setInterval(() => {
      if (track?.nowPlaying) {
        // Si está reproduciendo, actualizar cada 15 segundos (más frecuente)
        fetchNowPlaying();
      } else {
        // Si no está reproduciendo, actualizar cada 30 segundos
        fetchNowPlaying();
      }
    }, track?.nowPlaying ? 15000 : 30000);

    return () => clearInterval(interval);
  }, [track?.nowPlaying, retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  // Estado de carga inicial
  if (loading && !track) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500/20 rounded flex items-center justify-center animate-pulse">
            <Music2 size={16} className="text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Cargando música...</p>
            <p className="text-gray-400 text-xs">Conectando con Last.fm</p>
          </div>
        </div>
      </div>
    );
  }

  // ... (el resto del componente igual)
  // Estado de error
  if (error) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500/20 rounded flex items-center justify-center">
            <AlertCircle size={16} className="text-red-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Error de conexión</p>
            <p className="text-gray-400 text-xs truncate">{error}</p>
            <button 
              onClick={handleRetry}
              className="flex items-center gap-1 text-blue-400 text-xs mt-1 hover:text-blue-300 transition-colors"
            >
              <RefreshCw size={12} />
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Sin track
  if (!track) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-500/20 rounded flex items-center justify-center">
            <Music2 size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    );
  }

  // Track encontrado
  return (
    <a
      href="https://www.last.fm/user/eleBlue"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 max-w-xs hover:bg-black/90 hover:border-white/20 transition-all duration-300 group cursor-pointer shadow-lg"
    >
      <div className="flex items-center gap-3">
        {/* Imagen del álbum o ícono por defecto */}
        {track.image ? (
          <img 
            src={track.image} 
            alt={`Portada de ${track.album}`}
            className="w-10 h-10 rounded object-cover flex-shrink-0"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : null}
        
        {/* Ícono por defecto */}
        <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${
          track.nowPlaying ? 'bg-green-500/20' : 'bg-blue-500/20'
        } ${track.image ? 'hidden' : 'flex'}`}>
          {track.nowPlaying ? (
            <Play size={16} className="text-green-400" fill="currentColor" />
          ) : (
            <Pause size={16} className="text-blue-400" />
          )}
        </div>
        
        {/* Información del track */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
              track.nowPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
            }`} />
            <p className="text-white text-sm font-medium truncate">
              {track.nowPlaying ? 'Escuchando ahora' : 'Escuchado recientemente'}
            </p>
          </div>
          <p className="text-gray-200 text-xs font-medium truncate" title={track.name}>
            {track.name}
          </p>
          <p className="text-gray-400 text-xs truncate" title={track.artist}>
            {track.artist}
          </p>
          
         
        </div>
      </div>
      
      {/* Efecto hover sutil */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  );
}