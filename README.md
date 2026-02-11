# Contrats d'API - CopaLive

Ce document définit les contrats d'API basés sur les hooks React Query utilisés dans l'application.

## Base URL
```
VITE_API_BASE_URL (défaut: http://localhost:3000/api)
```

## Endpoints

### 1. Liste des matchs

**Endpoint**: `GET /games`

**Description**: Récupère la liste de tous les matchs

**Réponse**: 
```typescript
{
  games: Game[]
}
```

**Exemple de réponse**:
```json
{
  "games": [
    {
      "id": "1",
      "homeTeam": {
        "id": "team1",
        "name": "France",
        "shortName": "FRA",
        "flag": "🇫🇷",
        "score": 2
      },
      "awayTeam": {
        "id": "team2",
        "name": "Allemagne",
        "shortName": "GER",
        "flag": "🇩🇪",
        "score": 1
      },
      "status": "FINISHED",
      "stage": "QUARTER_FINALS",
      "date": "2026-02-11T18:00:00Z",
      "goals": [
        {
          "minute": 23,
          "scorer": {
            "id": "player1",
            "name": "Mbappé"
          }
        }
      ],
      "substitutions": [
        {
          "minute": 65,
          "team": {
            "id": "team1",
            "name": "France"
          },
          "playerIn": {
            "id": "player2",
            "name": "Griezmann"
          },
          "playerOut": {
            "id": "player3",
            "name": "Dembélé"
          }
        }
      ],
      "penalties": [],
      "bookings": [
        {
          "minute": 45,
          "team": {
            "id": "team2",
            "name": "Allemagne"
          },
          "player": {
            "id": "player4",
            "name": "Müller"
          },
          "card": "YELLOW"
        }
      ]
    }
  ]
}
```

**Notes**:
- Les matchs sont triés par date décroissante côté client
- Polling automatique toutes les 30 secondes
- Cache de 30 secondes

---

### 2. Détails d'un match

**Endpoint**: `GET /game/:id`

**Description**: Récupère les détails d'un match spécifique

**Paramètres**:
- `id` (string, requis): Identifiant unique du match

**Réponse**: 
```typescript
Game
```

**Exemple de réponse**:
```json
{
  "id": "1",
  "homeTeam": {
    "id": "team1",
    "name": "France",
    "shortName": "FRA",
    "flag": "🇫🇷",
    "score": 2
  },
  "awayTeam": {
    "id": "team2",
    "name": "Allemagne",
    "shortName": "GER",
    "flag": "🇩🇪",
    "score": 1
  },
  "status": "FINISHED",
  "stage": "QUARTER_FINALS",
  "date": "2026-02-11T18:00:00Z",
  "goals": [
    {
      "minute": 23,
      "scorer": {
        "id": "player1",
        "name": "Mbappé"
      }
    },
    {
      "minute": 78,
      "scorer": {
        "id": "player5",
        "name": "Giroud"
      }
    }
  ],
  "substitutions": [
    {
      "minute": 65,
      "team": {
        "id": "team1",
        "name": "France"
      },
      "playerIn": {
        "id": "player2",
        "name": "Griezmann"
      },
      "playerOut": {
        "id": "player3",
        "name": "Dembélé"
      }
    }
  ],
  "penalties": [],
  "bookings": [
    {
      "minute": 45,
      "team": {
        "id": "team2",
        "name": "Allemagne"
      },
      "player": {
        "id": "player4",
        "name": "Müller"
      },
      "card": "YELLOW"
    }
  ]
}
```

**Notes**:
- Polling automatique toutes les 30 secondes
- Cache de 30 secondes
- La requête est désactivée si aucun `id` n'est fourni

---

## Types TypeScript

### Game
```typescript
type Game = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: GameStatus;
  stage: GameStage;
  date: string; // ISO 8601 format
  goals?: Goal[];
  substitutions?: Subs[];
  penalties?: Penalty[];
  bookings?: Booking[];
}
```

### Team
```typescript
type Team = {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  score?: number;
}
```

### GameStatus
```typescript
type GameStatus =
  | "SCHEDULED"
  | "LIVE"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "SUSPENDED"
  | "CANCELLED";
```

### GameStage
```typescript
type GameStage = 
  | "FINAL"
  | "THIRD_PLACE"
  | "SEMI_FINALS"
  | "QUARTER_FINALS"
  | "LAST_16"
  | "LAST_32"
  | "LAST_64"
  | "ROUND_4"
  | "ROUND_3"
  | "ROUND_2"
  | "ROUND_1"
  | "GROUP_STAGE"
  | "PRELIMINARY_ROUND"
  | "QUALIFICATION"
  | "QUALIFICATION_ROUND_1"
  | "QUALIFICATION_ROUND_2"
  | "QUALIFICATION_ROUND_3"
  | "PLAYOFF_ROUND_1"
  | "PLAYOFF_ROUND_2"
  | "PLAYOFFS"
  | "REGULAR_SEASON"
  | "CLAUSURA"
  | "APERTURA"
  | "CHAMPIONSHIP"
  | "RELEGATION"
  | "RELEGATION_ROUND";
```

### Goal
```typescript
type Goal = {
  minute: number;
  scorer: {
    id: string;
    name: string;
  };
}
```

### Subs (Substitution)
```typescript
type Subs = {
  minute: number;
  team: {
    id: string;
    name: string;
  };
  playerIn: {
    id: string;
    name: string;
  };
  playerOut: {
    id: string;
    name: string;
  };
}
```

### Penalty
```typescript
type Penalty = {
  minute: number;
  team: {
    id: string;
    name: string;
  };
  player: {
    id: string;
    name: string;
  };
}
```

### Booking
```typescript
type Booking = {
  minute: number;
  team: {
    id: string;
    name: string;
  };
  player: {
    id: string;
    name: string;
  };
  card: "RED" | "YELLOW";
}
```

### Player
```typescript
type Player = {
  id: string;
  firstName: string;
  lastName: string;
  matchesPlayed: number;
  goalsScored: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  position: string;
  shirtNumber: number;
}
```

---

## Gestion des erreurs

### Structure d'erreur
```typescript
class ApiError extends Error {
  status: number;
  data?: unknown;
}
```

### Codes de statut HTTP

- **200 OK**: Requête réussie
- **400 Bad Request**: Paramètres invalides
- **404 Not Found**: Ressource non trouvée
- **500 Internal Server Error**: Erreur serveur

### Exemple de réponse d'erreur
```json
{
  "message": "Match non trouvé",
  "status": 404
}
```

---

## Headers

Toutes les requêtes incluent:
```
Content-Type: application/json
```

---

## Notes techniques

1. **Polling**: Les deux endpoints sont configurés avec un polling automatique de 30 secondes pour suivre les matchs en direct
2. **Cache**: Les données sont considérées fraîches pendant 30 secondes (`staleTime`)
3. **Format de date**: Toutes les dates doivent être au format ISO 8601
4. **Tri**: La liste des matchs est triée par date décroissante côté client
5. **Query Keys**: 
   - Liste des matchs: `['matches']`
   - Détail d'un match: `['match', id]`
