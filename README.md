# Validation and Verification - Coursework 3

### Preliminary note:

To use dockerfile to verify a file, just do this:

```
docker run -ti --rm -v $PWD/test-algorithms:/app/test-algorithms 677877e05b9b gillian-js verify /app/test-algorithms/meter-to-feet-conversion.js
```
