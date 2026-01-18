# Database Entity Relationship Diagram

```mermaid
erDiagram
    MATCHA {
        int id PK "Primary Key"
        varchar name "Matcha name"
        varchar brand "Brand name"
        varchar origin "Origin location"
        varchar grade "Quality grade"
        text description "Optional description"
        decimal price "Price in USD"
        timestamp createdAt "Creation timestamp"
    }
    
    TASTING_NOTES {
        int id PK "Primary Key"
        int matchaId FK "Foreign Key to Matcha"
        int flavorRating "Rating 1-10"
        int aromaRating "Rating 1-10"
        int textureRating "Rating 1-10"
        int overallRating "Rating 1-10"
        text notes "Optional tasting notes"
        date tastingDate "Date of tasting"
        int brewingTemperature "Temperature in Celsius"
        varchar brewingMethod "Brewing method used"
        timestamp createdAt "Creation timestamp"
    }
    
    MATCHA ||--o{ TASTING_NOTES : "has many"
```

## Relationship Explanation:
- **One-to-Many**: One MATCHA can have many TASTING_NOTES
- **Foreign Key**: `matchaId` in TASTING_NOTES references `id` in MATCHA
- **Cascade Delete**: When a MATCHA is deleted, all related TASTING_NOTES are deleted
