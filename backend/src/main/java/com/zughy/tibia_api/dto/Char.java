package com.zughy.tibia_api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;


public record Char(
    CharacterData character,
    Information information
) {

    // 1. O objeto "character" principal
    public static record CharacterData(
        @JsonProperty("account_badges") List<AccountBadge> accountBadges,
        @JsonProperty("account_information") AccountInformation accountInformation,
        List<Achievement> achievements,
        CharacterDetails character,
        List<Death> deaths,
        @JsonProperty("deaths_truncated") boolean deathsTruncated,
        @JsonProperty("other_characters") List<OtherCharacter> otherCharacters
    ) {}

    // 2. O objeto "information"
    public static record Information(
        ApiDetails api,
        StatusDetails status,
        @JsonProperty("tibia_urls") List<String> tibiaUrls,
        String timestamp
    ) {}

    // --- Sub-classes de CharacterData ---

    public static record AccountBadge(
        String description,
        @JsonProperty("icon_url") String iconUrl,
        String name
    ) {}

    public static record AccountInformation(
        String created,
        @JsonProperty("loyalty_title") String loyaltyTitle,
        String position
    ) {}

    public static record Achievement(
        int grade,
        String name,
        boolean secret
    ) {}

    // 3. O objeto "character" aninhado (o mais importante)
    public static record CharacterDetails(
        @JsonProperty("account_status") String accountStatus,
        @JsonProperty("achievement_points") int achievementPoints,
        String comment,
        @JsonProperty("deletion_date") String deletionDate,
        @JsonProperty("former_names") List<String> formerNames,
        @JsonProperty("former_worlds") List<String> formerWorlds,
        Guild guild,
        List<House> houses,
        @JsonProperty("last_login") String lastLogin,
        int level,
        @JsonProperty("married_to") String marriedTo,
        String name,
        String position,
        String residence,
        String sex,
        String title,
        boolean traded,
        @JsonProperty("unlocked_titles") int unlockedTitles,
        String vocation,
        String world
    ) {}

    public static record Guild(
        String name,
        String rank
    ) {}

    public static record House(
        int houseid,
        String name,
        String paid,
        String town
    ) {}

    public static record Death(
        List<Participant> assists,
        List<Participant> killers,
        int level,
        String reason,
        String time
    ) {}

    // Killer e Assist têm a mesma estrutura
    public static record Participant(
        String name,
        boolean player,
        String summon,
        boolean traded
    ) {}

    public static record OtherCharacter(
        boolean deleted,
        boolean main,
        String name,
        String position,
        String status,
        boolean traded,
        String world
    ) {}

    // --- Sub-classes de Information ---

    public static record ApiDetails(
        String commit,
        String release,
        int version
    ) {}

    public static record StatusDetails(
        int error,
        @JsonProperty("http_code") int httpCode,
        String message
    ) {}
}