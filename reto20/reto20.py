    def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
        received.sort()
        expected.sort()
        missing: dict[str, int] = {}
        extra: dict[str, int] = {}
        set_gifts = set(received + expected)
        for gift in set_gifts:
            received_count = received.count(gift)
            expected_count = expected.count(gift)
            if received_count > expected_count:
                extra[gift] = received_count - expected_count
            elif received_count < expected_count:
                missing[gift] = expected_count - received_count
        return {"missing": missing, "extra": extra}
