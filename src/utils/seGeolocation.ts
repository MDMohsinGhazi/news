import { useState, useEffect, useCallback } from 'react';

interface GeolocationData {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationData>({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [watchId, setWatchId] = useState<number | null>(null);

  const handleSuccess = useCallback((position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null,
    });
  }, []);

  const handleError = useCallback((error: GeolocationPositionError) => {
    setLocation({
      latitude: null,
      longitude: null,
      error: error.message,
    });
  }, []);

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Watch position for continuous updates
      const id = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
      setWatchId(id);

      // Cleanup on unmount
      return () => {
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Geolocation is not supported by this browser.',
      });
    }
  }, []);

  return location;
};

export default useGeolocation;
